#ifndef PLAYER_H
#define PLAYER_H
#include "board.h"
#include "memory.h"
#include <iostream>
using namespace std;

class Player{
public:
	virtual void wins() = 0;
	virtual pair<int, int> get_move(Board* board, float alpha, Memory* memory, pair<int, int> prev_move) = 0;
};

#endif
