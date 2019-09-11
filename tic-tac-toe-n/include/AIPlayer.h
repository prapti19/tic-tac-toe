#ifndef AIPLAYER_H
#define AIPLAYER_H
#include "player.h"
#include "board.h"

class AIPlayer : public Player{
private:
	Board* board;
public:
	AIPlayer(Board* _board);
	void wins();
	pair<int, int> get_move(Board* _board);
	int get_score();
	pair<pair<int, int>, int> minimax(int depth, bool max, int alpha, int beta);
}; 

#endif