#ifndef BOARD_H
#define BOARD_H
#include "error.h"
#include <vector>

class Board{
public:
	// Data members should be private
	int dimension;
	int num_moves_played;
	vector<vector<int> > board;
	vector<int> row_sum, col_sum;
	vector<vector<int> > row_available, col_available;
	vector<int> primary_diagonal_available, secondary_diagonal_available;
public:
	Board(int _dimension);
	bool is_valid_move(int row, int col);
	void apply_move(int row, int col, int val);
	void undo_move(int row, int col);
	bool is_final_state();
	bool is_winning_state(int val);
	int is_good_column(int col);
	int is_good_row(int row);
	int is_good_diagonals();
	void print();
};

#endif