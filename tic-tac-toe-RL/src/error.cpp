#include "error.h"
#include<cassert>

void Error::err(string msg){
	cerr<<msg<<endl;
}

void Error::check(bool condition, string msg){
	if(!condition){
		err(msg);
		assert(false);
	}
}