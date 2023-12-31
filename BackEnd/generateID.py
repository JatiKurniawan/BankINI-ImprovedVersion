import random

class ID:
    def __init__(self) -> None:
        pass

    def generateId(self):
        listId = []
        listchoice = [0, 1, 2, 3, 4, 5, 6,7 ,8 ,9]
        for i in range(6):
            choice = random.choice(listchoice)
            listId.append(str(choice))
        return int(''.join(listId))