#include "memory.h"
#include <unordered_map>
#include <string>

string Memory::board_to_string(Board* _board){
	string ret;
	int c;
	int n = _board->dimension;
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			c = _board->board[i][j];
			if(c == -1)
				ret.append("2");
			else if(c == 1)
				ret.append("1");
			else
				ret.append("0"); 
		}
	}
	return ret;
}
float Memory::get_value(Board* _board){
	string s = board_to_string(_board);
	if(m.find(s) == m.end())
		m[s] = 0.5;
	_board->print();
	cout << s << " " << m[s] << endl;
	return m[s];
}




