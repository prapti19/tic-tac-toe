#include "error.h"

int main(){
	Error::err("This is error test!!");
	Error::check(true, "This is true!" );
	Error::check(false, "This is false!");
  	return 0;
}
