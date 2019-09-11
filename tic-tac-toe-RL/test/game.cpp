#include <iostream>
#include <sstream>
#include "board.h"
#include "game.h"
#include "player.h"
#include "memory.h"
using namespace std;

int main(int argc, char const *argv[]){
	stringstream strvalue;
	strvalue << argv[2];
	int n;
	strvalue >> n;
	char c = 'y';
	Memory memory;
	while(c == 'y'){
		Board board(n);
		Game game(argv[1], &board, &memory);
		game.play();
		printf("Wanna play more??[y/n]\n");
		cin>>c;
		cout<<c<<endl;
	}
	return 0;
}