export function getAllDogs() {
    // Your code here
    const url = "/dogs";
    const headers = {"Content-Type": 'text-html'}
    let body;

    const options = {
        method: 'GET',
        headers: headers,
        body: body
    }
    return fetch(url, options);
}

export function getDogNumberTwo() {
    // Your code here
    const url = "/dogs/2";
    const headers = {"Content-Type": "text/html"};
    let body;

    const options = {
        method: 'GET',
        headers: headers,
        body: body
    }
    return fetch(url, options)
}

export function postNewDog() {
    // Your code here
    const url = "/dogs";
    const headers = {'Location': 'application/x-www-form-urlencoded'};

    let body = new URLSearchParams({
        name: 'Firefox3.0',
        age: 99
    });

    const options = {
        method: 'POST',
        headers: headers,
        body: body
    }

    return fetch(url, options)
};


export function postNewDogV2(name, age) {
     // Your code here
     const url = '/dogs';
     let headers = {'Content-Type': 'application/x-www-form-urlencoded'};

     const body = new URLSearchParams({
        name: name,
        age: age
     });

     const options = {
        method: 'POST',
        headers: headers,
        body: body
     };
     
     return fetch(url, options) 
};

export function deleteDog(id) {
      // Your code here
      const url = `/dogs/${id}/delete`;
      const headers = {AUTH: 'ckyut5wau0000jyv5bsrud90y'};
      const body = "";

      const options = {
        method: "POST",
        headers: headers,
        body: body
      };

      return fetch(url, options);
};