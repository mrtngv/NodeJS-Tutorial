## JSON Data - Express and Body Parser Module

**jQuery -**
*jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.*

1. Install jQuery - `npm install jquery`.
2. Add jquery to index.html and prevent the default behavior of the form.

> **_Include jQuery_** <br />``<script>`` src="https://code.jquery.com/jquery-3.6.0.min.js"``<script>``<br/>

> **_Get Form By Id, Prevent default behavior, and make post request using ajax_** <br />``<script>``<br/>
$(document).ready(()=> {<br/>
            $('#form').submit((e) => {
                e.preventDefault();
                $.ajax({
                    url: '/',
                    type: 'post',
                    contentType: 'application/json',
                    data: JSON.stringify($('#form').serializeArray()),
                    success: (response)=> {
                        console.log('Success');
                        console.log(response);
                    }
                })
            })
        })
``<script>``

3. Use Json in body Parser `app.use(bodyParser.json());`
4. You have the request body in the post request: 
> app.post('/', (req, res) => {<br/>
console.log(`req.body`);<br/>res.json({success: true});})