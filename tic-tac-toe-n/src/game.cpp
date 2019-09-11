#include "game.h"
#include "board.h"
#include "player.h"
#include "humanPlayer.h"
#include "AIPlayer.h"
#include <vector>

Game::Game(string _name1, Board* _board):board(_board){
	//Board board(n);
	p[0] = new HumanPlayer(_name1);
	p[1] = new AIPlayer(board);
}
void Game::play(){
	int play = 1;
	int k = 0;
	pair<int, int> move;
	while(!board->is_final_state()){
		board->print();
		move = p[k]->get_move(board);
		board->apply_move(move.first, move.second, play);
		k = (k+1)&1, play = -play;
	}
	print_result();
}
void Game::print_result(){
	board->print();
	if(board->is_winning_state(1)){
		p[0]->wins();
	}else if(board->is_winning_state(-1)){
		p[1]->wins();
	}else{
		cout << "Game draw!" << endl;
	}
}