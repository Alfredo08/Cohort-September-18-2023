
def add_or_subtract num1, num2
    if num1 > num2
        num1 + num2
    else
        num1 - num2
    end
end

total = add_or_subtract 10, 20
puts total
total = add_or_subtract 150, 20
puts total