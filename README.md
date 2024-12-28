# Angular Studies

These projects were generated in an [Nx](https://nx.dev) monorepo and are in this repository *in part*.

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Powerful, Extensible Dev Tools**

[Nx Documentation](https://nx.dev/angular)

## Random Numbers Study
When the form fields are filled out by the user and the "Generate" button is clicked, the username and a random integer between 1 and 9 are rendered in the DOM. The Angular ngModel directive is used to autofill the editable form fields.

## Reddit-like Study
Allows the user to post an article (with a title and a URL) and then vote on the posts.

It has 2 components:

1 to hold the form to submit an article and the default 3 articles. It binds the submit value in the view to entered text in the inputs using the hash, resolve, syntax then gets the data into the component as objects of the type HTMLInputElement.

1 to hold the individual, new, submitted articles using @Hostbinding to bind a class to the host app. It uses a model to isolate the data structures. The articles are automatically and dynamically sorted by vote values. Voting uses increment and decrement.