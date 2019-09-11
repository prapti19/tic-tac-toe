#include "AIPlayer.h"
#include "player.h"
#include "board.h"
#include <iostream>
using namespace std;

AIPlayer::AIPlayer(Board* _board){
	board = _board;
}

void AIPlayer::wins(){
	cout << "Computer Wins!!\n";
}

pair<int, int> AIPlayer::get_move(Board* _board, float alpha, Memory* memory, pair<int, int> prev_move){
	int row, col;
	int n = board->dimension;
	float mmax = -5;
	string grandparent;
	string parent = memory->board_to_string(board);
	cout<<"[Start Successors]..."<<endl;
	board->print();
	cout<<"Starting..."<<endl;
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			if(board->board[i][j])
				continue;
			cout<<i<<" " << j<<endl;
			board->apply_move(i, j, -1);
			if(board->is_final_state()){
				string child = memory->board_to_string(board);
				memory->get_value(board);
				if(board->is_winning_state(-1)){
					memory->m[child] = 1;
				}
				else{
					memory->m[child] = 0;
				}
			}
			if(mmax < memory->get_value(board)){
				row = i, col = j;
				mmax = memory->get_value(board);
			}
			board->undo_move(i, j);
		}
	}
	cout<<"[End Successors]..."<<endl;
	if(prev_move.first != -1){
		board->undo_move(prev_move.first, prev_move.second);
		grandparent = memory->board_to_string(board);
		memory->m[grandparent] = memory->m[grandparent] + alpha*(mmax - memory->m[grandparent]);
		cout <<"Grandparent"<<endl;
		memory->get_value(board);
		board->apply_move(prev_move.first, prev_move.second, 1);
	}
	return make_pair(row, col);
}