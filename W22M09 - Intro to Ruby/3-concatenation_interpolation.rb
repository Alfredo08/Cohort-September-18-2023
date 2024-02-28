=begin
    Concatenation
    let firstName = 'Alex';
    let lastName = 'Miller';
    let fullName = firstName + ' ' + lastName;
    let age = 25;
    console.log('Hey there my name is ' + fullName + ' And I am ' + age + ' years old.');

    Interpolation
    let firstName = 'Alex';
    let lastName = 'Miller';
    let age = 25;
    console.log(`Hey there my name is ${fullName} And I am ${age} years old.`);

    return (
        <div>
            <h1> Hey there my name is {fullName} And I am {age} years old. </h1>
        </div>)
=end

# Concatenation in ruby
first_name = 'Alex'
last_name = 'Miller'
age = 25
message = 'Hey there my name is ' + first_name + ' ' + last_name + ' And I am ' + age.to_s + ' years old.'
puts message

message_interpolated = "Hey there my name is #{first_name} #{last_name} And I am #{age} years old."
puts message_interpolated