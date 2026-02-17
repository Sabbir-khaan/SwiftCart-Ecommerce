#Answered the following Questions

1) What is the difference between null and undefined?

    undefined-->  ভ্যারিয়েবল Declare করা হইসে কিন্তু সেই ভ্যারিয়েবলে কোনো Value Assign করা হয় নাই তখন অই অবস্থাকেই Undefined বলে।

    null -->  কাজের ক্ষেত্রে আমরা কোনো কিছুর Value null করে থাকি।


2) What is the use of the map() function in JavaScript? How is it different from forEach()?

    map()--> ম্যাপ ব্যাবহার করা হয় Value Return করার জন্য । যেমন ম্যাপ Always Array Return করে ।

    forEach()--> forEach লুপ ব্যাবহার করা হয় ডাটা Output দেখার জন্য । যা কোনো কিছু Return করে না।


3) What is the difference between == and ===?

    == --> Double Equal সুধু দুই পাশের মানের পার্থক্য চেক করে একটা Value Return করে।

    === --> Triple Equal উভয় পাশের মান এবং ডাটা টাইপ চেক করে একটা Value Return করে।


4) What is the significance of async/await in fetching API data?
    
    --> JavaScript Code Execute হয় লাইন বাই লাইন সেক্ষেত্রে Functional API Fetch করার সময় JavaScript যেন কোনো API Fetch না করে চলে যায় সময় বেশি লাগার কারনে তাই asynchronous Function এর async/await ব্যাবহার করা হয় যাতে API Fetch না হওয়া পর্যন্ত সে অপেক্ষা করে এবং API Fetch হয়ে গেলে পরবর্তী কোডগুলো Execute করে।


5) Explain the concept of Scope in JavaScript (Global, Function, Block).

    Global Scope --> পুরো Window টা কেই Global Scope বলা হয়।

    Function Scope --> Function এর ভিতর বাদে কোনো মান বা Variable বা ডাটা দেখা যায় না বা Access করা যায় না তাকে Function Scope বলে।

    Block Scope --> Curly Braces {} এর মধ্যে let, const Keyword দিয়ে Declare করা কোনো Variable কে যখন বাইরে থেকে Access করা যায় না তখন তাকে Block Scope বলে।