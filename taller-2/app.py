listaNumeros= [1,3,5,2,7,5,5,8,4,8,4,8,4]
elementoPorUsuario = 7
contador = 0

for i in listaNumeros:
    if i == elementoPorUsuario:
        contador+=1
print(contador)

""" 2da forma """

my_list = [i for i in listaNumeros if i == elementoPorUsuario]
print(len(my_list))

""" 3ra forma """

my_list2 = filter(lambda x: x == elementoPorUsuario, listaNumeros)
print(len(my_list))