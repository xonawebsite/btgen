# btgen
The web development boilerplate CLI generator tool.

# Install
To install you need to have already installed <a href="https://nodejs.org/">nodejs</a> & npm.

With that, just run <code>$ npm install -g btgen</code>.

That's it!

# Use
Right now, the tool has only 1 generator active, webpage, this one generate a blank project space with the following struture:

<pre>
	<code>
		<PROJECT_NAME>
		|--- css
			|--- master.css
		|--- js
			|--- vendor
				|--- jquery-3.5.0.js
				|--- jquery-3.5.0.min.js
			|--- main.js
		|--- images
		|--- index.html
	</code>
</pre>

For generate a webpage template just run this:

<code>$ btgen webpage <PROJECT_NAME></code>

Where <PROJECT_NAME> is the name for your project.

# TODO

<ul>
	<li>Add btwebpage template</li>
	<li>Add btstarter template</li>
	<li>Add vuepage template</li>
	<li>Add vueapp template</li>
	<li>Add vuespa template</li>
	<li>Add phppage template</li>
	<li>Add phpapp template</li>
	<li>Add robots.txt & humans.txt to the templates</li>
</ul>