import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <h2>What is Context API</h2>
            <p>If we want to pass the value from parent component to immediate child component then we us prop drilling. But if we want to pass the value to the child of the child component then the value need to be pass from middle child then to that child. So prop drilling is not a good solution for this. Context API solve this problem. Context API is used to share the data with multiple component, without having to pass data through props manually.  </p>

            <h2>What is semantic Tag? </h2>
            <p>HTML tags are divided into 2 types, semantic and non-semantic tags. Semantic tag are those tags whose names are meaningful and easy to understand. It is easier for the developer to understand. HTML5 introduces many semantic tags. Example of semantic tags are footer, table, article, details etc.</p>
        </div>
    );
};

export default Blogs;