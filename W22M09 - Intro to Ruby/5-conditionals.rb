num_one = 50
num_two = 80
num_three = 60
num_four = 80

if num_one < num_two
    puts "#{num_one} is lesser than #{num_two}"
    if num_one < num_three
        puts "And it is also lesser than #{num_three}"
    else
        puts "However, it is greater than #{num_three}"
    end
elsif num_one < num_three
    puts "#{num_one} is greater than #{num_two}"
    puts "However, it is lesser than #{num_three}"
end

puts "They are the same!" if num_two == num_four 