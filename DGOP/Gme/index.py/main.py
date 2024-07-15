num1 = int(input("Primeiro número : "))
num2 = int(input("Primeiro número : "))

print("1 = soma // 2 = menos // 3 = multiplicação // 4 = divisão")
operacao = int(input("Qual você quer? "))

if operacao == 1:
    print(num1 + num2)
elif operacao == 2:
    print(num1 - num2)
elif operacao == 3:
    print(num1 * num2)
elif operacao == 4:
   print(num1 / num2)