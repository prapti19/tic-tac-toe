#include <iostream>
using namespace std;
#include "board.h"
#include "error.h"

int main()
{
	Board board(3);
	board.apply_move(0, 0, 1);
	board.print();
	cout << board.is_valid_move(0, 0) << endl;
	board.undo_move(0, 0);
	board.apply_move(0, 0, 1);
	board.print();
	board.apply_move(0, 1, 1);
	board.print();
	board.apply_move(0, 2, 1);
	board.print();
	cout << board.is_winning_state(-1) << endl;
	cout << board.is_winning_state(1) << endl;
	cout << board.is_final_state() << endl;
	return 0;
}
