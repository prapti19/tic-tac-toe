#include <iostream>
#include <sstream>
#include "board.h"
#include "game.h"
#include "player.h"
using namespace std;

int main(int argc, char const *argv[]){
	stringstream strvalue;
	strvalue << argv[2];
	int n;
	strvalue >> n;
	Board board(n);
	Game game(argv[1], &board);
	game.play();
	return 0;
}