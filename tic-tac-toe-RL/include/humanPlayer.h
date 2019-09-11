#ifndef HUMANPLAYER_H
#define HUMANPLAYER_H
#include "player.h"
#include "memory.h"

class HumanPlayer: public Player{
private:
	string name;
public:
	HumanPlayer(string _name = string("aaa"));
	void wins();
	pair<int, int> get_move(Board* _board, float alpha, Memory* _memory, pair<int, int> prev_move);
};

#endif