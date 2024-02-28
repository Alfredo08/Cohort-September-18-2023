=begin
    const greeting = (name, callback) => {
        callback();
        console.log(name);
        console.log("See you arround!");
    }

    const printHello = () => {
        console.log("Hello there!");
    }

    greeting("Alex", printHello);
=end

def greeting name
    yield
    puts name
    # yield
    puts "See you arround!"
end

def print_hello
    puts "Hello there!"
end

greeting "Alex Miller" do
    print_hello
end

