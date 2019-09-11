#ifndef GAME_H
#define GAME_H
#include "board.h"
#include "player.h"
#include <vector>

class Game{
private:
	Board* board;
public:
	Player* p[2];
	Game(string _name1, Board* board);
	void play();
	void print_result();
};

#endif