#ifndef GAME_H
#define GAME_H
#include "board.h"
#include "player.h"
#include "memory.h"
#include <vector>

class Game{
private:
	Board* board;
	Memory* memory;
public:
	Player* p[2];
	Game(string _name1, Board* board, Memory* memory);
	~Game();
	void play();
	void print_result(pair<int, int> move);
};

#endif