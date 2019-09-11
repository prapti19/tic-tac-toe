#ifndef HUMANPLAYER_H
#define HUMANPLAYER_H
#include "player.h"

class HumanPlayer: public Player{
private:
	string name;
public:
	HumanPlayer(string _name = string("aaa"));
	void wins();
	pair<int, int> get_move(Board* _board);
};

#endif