#include "AIPlayer.h"
#include "player.h"
#include "board.h"

#include <iostream>
using namespace std;

const int MIN = -10000;
const int MAX = 10000;

AIPlayer::AIPlayer(Board* _board){
	board = _board;
}

void AIPlayer::wins(){
	cout << "Computer Wins!!\n";
}

pair<int, int> AIPlayer::get_move(Board* _board){
	int n = _board->dimension;
	int depth;
	if(n <= 6)
		depth = 7;
	else if(n > 6 && n <= 9)
		depth = 5;
	else if(n > 9 && n <= 16)
		depth = 4;
	else 
		depth = 2;
	return minimax(depth, true, MIN, MAX).first;		// computer is maximizing player
}

int AIPlayer::get_score(){
	int depth = board->num_moves_played;
	if(board->is_winning_state(-1)){	// computer wins
		return 1000;
	}
	if(board->is_winning_state(1)){		// first player wins
		return -1000;
	}
	if(board->num_moves_played == board->dimension * board->dimension)
		return 0;
	int score=0;
	for(int i=0;i<board->dimension;i++){
		score += board->is_good_column(i);
		score += board->is_good_row(i);
	}	
	score += board->is_good_diagonals();
	return score;
}
pair<pair<int, int> , int> AIPlayer::minimax(int depth, bool maximizing_player, int alpha, int beta){
	int row = -1, col = -1, score;
	int n = board->dimension;
	// board->print();
	if(board->is_final_state()){
		return make_pair(make_pair(row, col), get_score());
	}
	if(depth == 0){
		return make_pair(make_pair(row, col), get_score());	
	}
	if(maximizing_player){ 
		score = MIN;
		for(int i=0;i<n;i++){
			for(int j=0;j<n;j++){
				if(board->board[i][j])
					continue;
				board->apply_move(i, j, -1);
				int _score = minimax(depth-1, !maximizing_player, alpha, beta).second;
				board->undo_move(i, j);
				if(_score > alpha){
					alpha = _score;
					row = i, col = j;
				}
				if(alpha >= beta){
					row = i, col = j, score = alpha;
					return make_pair(make_pair(row, col), score);
				}
			}
		}
		return make_pair(make_pair(row, col), alpha);
	}
	else{ 
		score = MAX;
		for(int i=0;i<n;i++){
			for(int j=0;j<n;j++){
				if(board->board[i][j])
					continue;
				board->apply_move(i, j, 1);
				int _score = minimax(depth-1, !maximizing_player, alpha, beta).second;
				board->undo_move(i, j);
				if(_score < beta){
					beta = _score;
					row=i, col=j;
				}
				if(alpha >= beta){
					row = i, col = j, score = beta;
					return make_pair(make_pair(row, col), score);
				}
			}
		}
		return make_pair(make_pair(row, col), beta);
	}
	return make_pair(make_pair(row, col), score);
}