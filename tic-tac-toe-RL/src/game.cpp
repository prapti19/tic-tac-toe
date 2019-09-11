#include "game.h"
#include "board.h"
#include "player.h"
#include "humanPlayer.h"
#include "AIPlayer.h"
#include <vector>

Game::Game(string _name1, Board* _board, Memory* _memory):board(_board), memory(_memory){
	//Board board(n);
	p[0] = new HumanPlayer(_name1);
	p[1] = new AIPlayer(board);
}
Game::~Game(){
	if(p[0]){
		delete p[0];
		p[0]=NULL;
	}
	if(p[1]){
		delete p[1];
		p[1]=NULL;
	}
}
void Game::play(){
	int play = 1;
	int k = 0;
	pair<int, int> move, prev_move = make_pair(-1, -1);
	while(!board->is_final_state()){
		board->print();
		move = p[k]->get_move(board, 1, memory, prev_move);
		if(k == 0)
			prev_move = move;
		board->apply_move(move.first, move.second, play);
		k = (k+1)&1, play = -play;
	}
	print_result(move);
}
void Game::print_result(pair<int, int> move){
	board->print();
	if(board->is_winning_state(1)){
		board->undo_move(move.first, move.second);
		memory->get_value(board);
		string s = memory->board_to_string(board);
		memory->m[s] = -1;
		p[0]->wins();
	}else if(board->is_winning_state(-1)){
		board->undo_move(move.first, move.second);
		memory->get_value(board);
		string s = memory->board_to_string(board);
		memory->m[s] = 1;
		p[1]->wins();
	}else{
		cout << "Game draw!" << endl;
	}
}