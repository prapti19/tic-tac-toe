#ifndef AIPLAYER_H
#define AIPLAYER_H
#include "player.h"
#include "board.h"
#include "memory.h"

class AIPlayer : public Player{
private:
	Board* board;
public:
	AIPlayer(Board* _board);
	void wins();
	pair<int, int> get_move(Board* _board, float alpha, Memory* _memory, pair<int, int> prev_move);
}; 

#endif