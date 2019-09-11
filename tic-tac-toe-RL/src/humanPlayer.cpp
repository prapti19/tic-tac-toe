#include "humanPlayer.h"
#include "player.h"

void HumanPlayer::wins(){
	cout << name << " Wins!!\n";
}

pair<int, int> HumanPlayer::get_move(Board* _board, float alpha, Memory* _memory, pair<int, int> prev_move){
	int row, col;
	do{
		cin>>row>>col;
	}while(!_board->is_valid_move(row, col));
	return make_pair(row, col);
}
HumanPlayer::HumanPlayer(string _name){
	name = _name;
}
