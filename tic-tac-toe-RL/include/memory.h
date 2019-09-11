#ifndef MEMORY_H
#define MEMORY_H
#include "board.h"
#include <string>
#include <unordered_map>

class Memory{
public:
	unordered_map<string, float> m;
	string board_to_string(Board* b);
	float get_value(Board* b);
};

#endif
