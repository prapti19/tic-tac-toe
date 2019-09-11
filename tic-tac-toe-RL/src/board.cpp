#include "board.h"
#include "error.h"
#include <iostream>
#include <vector>
using namespace std;

Board::Board(int _dimension):dimension(_dimension){
	Error::check(dimension>0, "Dimension should be > 0");
	board.assign(dimension, vector<int>(dimension, 0));
	row_sum.assign(dimension, 0);
	col_sum.assign(dimension, 0);
	row_available.assign(dimension, vector<int>(2, 0));
	col_available.assign(dimension, vector<int>(2, 0));
	primary_diagonal_available.assign(2, 0);
	secondary_diagonal_available.assign(2, 0);
	num_moves_played = 0;
}
bool Board::is_valid_move(int row, int col){
	if(row<0 || row>=dimension){
		Error::err("Row out of dimension!");
		return false;
	}
	if(col<0 || col>=dimension){
		Error::err("Column out of dimension!");
		return false;
	}
	if(board[row][col]!=0){
		print();
		Error::err("Already occupied!");
		return false;
	}
	return true;
}
void Board::apply_move(int row, int col, int val){
	board[row][col] = val;
	row_sum[row] += val, col_sum[col] += val;
	if(val == -1){
		row_available[row][0]++;
		col_available[col][0]++;
		if(row == col)
			primary_diagonal_available[0]++;
		if(row+col == dimension-1)
			secondary_diagonal_available[0]++;
	}
	else{
		row_available[row][1]++;
		col_available[col][1]++;
		if(row == col)
			primary_diagonal_available[1]++;
		if(row+col == dimension-1)
			secondary_diagonal_available[1]++;
	}
	num_moves_played++;
}
void Board::undo_move(int row, int col){
	num_moves_played--;
	int val = board[row][col];
	row_sum[row] -= val, col_sum[col] -= val;
	if(val == -1){
		row_available[row][0]--;
		col_available[col][0]--;
		primary_diagonal_available[0]--;
		secondary_diagonal_available[0]--;
	}
	else{
		row_available[row][1]--;
		col_available[col][1]--;
		primary_diagonal_available[1]--;
		secondary_diagonal_available[1]--;
	}
	board[row][col] = 0;
}
int Board::is_good_column(int col){
	if(col_available[col][1] == 0)
		return 1;
	else
		return 0;
}
int Board::is_good_row(int row){
	if(row_available[row][1] == 0)
		return 1;
	else
		return 0;
}
int Board::is_good_diagonals(){
	int score=0;
	if(primary_diagonal_available[1] == 0)
		score++;
	if(secondary_diagonal_available[1] == 0)
		score++;
	return score;
}
bool Board::is_winning_state(int val){
	int required_sum = dimension*val;
	int primary_diagonal_sum=0, secondary_diagonal_sum=0;
	for(int i=0;i<dimension;i++){
		if((row_sum[i]==required_sum) | (col_sum[i]==required_sum)){
			return true;
		}
		primary_diagonal_sum += board[i][i];
		secondary_diagonal_sum += board[i][dimension-i-1];
	}
	if((primary_diagonal_sum==required_sum) | (secondary_diagonal_sum==required_sum)){
		return true;
	}
	return false;
}
bool Board::is_final_state(){
	if(num_moves_played == dimension * dimension){
		return true;
	}
	if(is_winning_state(1) | is_winning_state(-1)){
		return true;
	}
	return false;
}
void Board::print(){
	for(int i=0;i<2+dimension;i++)
		printf("--");
	printf("\n");
	for(auto row:board){
		printf("| ");
		for(auto val:row){
			if(val == 1)
				printf("X ");
			else if(val == -1)
				printf("0 ");
			else
				printf("- ");
		}
		printf("|\n");
	}
	for(int i=0;i<2+dimension;i++)
		printf("--");
	printf("\n");
}