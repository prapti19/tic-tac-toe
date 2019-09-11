SRC_DIR := ./src
OBJ_DIR := ./build
TEST_DIR := ./test
INCLUDE_DIR := ./include
CC := g++ -std=c++11 -g -O2 -I$(INCLUDE_DIR)

$(OBJ_DIR)/error.o: $(SRC_DIR)/error.cpp $(INCLUDE_DIR)/error.h
	$(CC) -c $(SRC_DIR)/error.cpp -o $(OBJ_DIR)/error.o
$(OBJ_DIR)/board.o: $(SRC_DIR)/board.cpp $(INCLUDE_DIR)/board.h $(INCLUDE_DIR)/error.h
	$(CC) -c $(SRC_DIR)/board.cpp -o $(OBJ_DIR)/board.o
$(OBJ_DIR)/memory.o: $(SRC_DIR)/memory.cpp $(INCLUDE_DIR)/memory.h
	$(CC) -c $(SRC_DIR)/memory.cpp -o $(OBJ_DIR)/memory.o
$(OBJ_DIR)/game.o: $(SRC_DIR)/game.cpp $(INCLUDE_DIR)/board.h $(INCLUDE_DIR)/player.h $(INCLUDE_DIR)/error.h $(INCLUDE_DIR)/game.h $(INCLUDE_DIR)/memory.h
	$(CC) -c $(SRC_DIR)/game.cpp -o $(OBJ_DIR)/game.o
$(OBJ_DIR)/humanPlayer.o: $(SRC_DIR)/humanPlayer.cpp $(INCLUDE_DIR)/player.h $(INCLUDE_DIR)/board.h $(INCLUDE_DIR)/memory.h $(INCLUDE_DIR)/humanPlayer.h 
	$(CC) -c $(SRC_DIR)/humanPlayer.cpp -o $(OBJ_DIR)/humanPlayer.o
$(OBJ_DIR)/AIPlayer.o: $(SRC_DIR)/AIPlayer.cpp $(INCLUDE_DIR)/player.h $(INCLUDE_DIR)/board.h $(INCLUDE_DIR)/memory.h $(INCLUDE_DIR)/AIPlayer.h
	$(CC) -c $(SRC_DIR)/AIPlayer.cpp -o $(OBJ_DIR)/AIPlayer.o
$(OBJ_DIR)/test-error: $(OBJ_DIR)/error.o $(TEST_DIR)/error.cpp
	$(CC) $(TEST_DIR)/error.cpp $(OBJ_DIR)/error.o -o $(OBJ_DIR)/test-error
$(OBJ_DIR)/test-board: $(OBJ_DIR)/board.o $(OBJ_DIR)/error.o $(TEST_DIR)/board.cpp
	$(CC) $(TEST_DIR)/board.cpp $(OBJ_DIR)/board.o $(OBJ_DIR)/error.o -o $(OBJ_DIR)/test-board
$(OBJ_DIR)/test-game: $(OBJ_DIR)/game.o $(OBJ_DIR)/board.o $(OBJ_DIR)/error.o $(OBJ_DIR)/humanPlayer.o $(OBJ_DIR)/AIPlayer.o $(OBJ_DIR)/memory.o $(TEST_DIR)/game.cpp
	$(CC) $(TEST_DIR)/game.cpp $(OBJ_DIR)/game.o $(OBJ_DIR)/board.o $(OBJ_DIR)/error.o $(OBJ_DIR)/humanPlayer.o $(OBJ_DIR)/AIPlayer.o $(OBJ_DIR)/memory.o -o $(OBJ_DIR)/test-game
run-test-error: $(OBJ_DIR)/test-error
	$(OBJ_DIR)/test-error 
run-test-board: $(OBJ_DIR)/test-board
	$(OBJ_DIR)/test-board
run-test-game: $(OBJ_DIR)/test-game
	$(OBJ_DIR)/test-game Dhwani 3
