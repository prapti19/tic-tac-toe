#ifndef PLAYER_H
#define PLAYER_H
#include "board.h"
#include <iostream>
using namespace std;

class Player{
public:
	virtual void wins() = 0;
	virtual pair<int, int> get_move(Board* _board) = 0;
};

#endif
