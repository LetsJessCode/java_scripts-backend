const viewButton = document.getElementById('javaBars')
const newButton = document.getElementById('newJava')
const deleteButton = document.getElementById('delete')
const viewJava = document.getElementById('viewJava')
const editButton = document.getElementById('edit')
const addButton = document.getElementById('addJava')


const baseUrl = 'http://localhost:3000'

        window.addEventListener('load', () => {
            eventClick()
        })

    function loadPeople() {
        // resetStory()
        const main = document.getElementById('main')
        fetch(baseUrl + '/people') 
        .then(resp => resp.json()) 
        .then(people => {
            people.forEach(person => {
              main.innerHTML +=  `
                <li id="person-${person.id}">
                    <a href="#" data-id="${person.id}">${person.name}</a> 
                    <ul id="javaBars">
                    <button id='addJava'>Add Java Script</button>
                </ul>
                </li>
                
                `
                eventClick()   
                         
            })
        })  
    }
         //show link

    // function getStory() {
    //     fetch(baseUrl + '/java_bars') 
    //     .then(resp => resp.json()) 
    //     .then(javaBars => {
    //         getJavas(javaBars)
         
    //     })
    // }

    // function getJavas(javaBars) { 
    //      debugger
    //     const main = document.getElementById('main')
    //         main.innerHTML +=
    //          javaBars.forEach(javaBar => 
    //             `
    //        <li>
    //             Name: <a href="#" data-id="${java_bar.person.id}">${java_bar.person.name}></a>
    //             Shop Name: ${java_bar.shop_name}
    //             Favorite Drink: ${java_bar.fav_drink}
    //             Least Favorite Drink: ${java_bar.least_fav}
    //             Recommend: ${java_bar.recommend ? "Yes" : "No"}
    //             Comments: ${java_bar.comment}
    //        </li>
    //             `
            
    //     )}

        function displayStory() { 
            //resetULs()
            let id = event.target.dataset.id
            let showJavaDiv = document.getElementById('show-java')
            let theJava = document.getElementById('the-java')
            const java = document.createElement('li')
            fetch(baseUrl + '/people/'+id)
            .then(resp => resp.json())
            .then(person => {
                 `
                <h3>${person.name}'s Java Story</h3> 
                `
                let ul = document.querySelector(`li#person-${person.id} #javaBars`)
                person.java_bars.forEach(java_bar => {
                    ul.innerHTML += `
                    <li>
                        Shop Name: ${java_bar.shop_name}<br>
                        Favorite Drink: ${java_bar.fav_drink}<br>
                        Least Favorite Drink: ${java_bar.least_fav}<br>
                        Recommend: ${java_bar.recommend ? "Yes" : "No"}<br>
                        Comments: ${java_bar.comment}
                        <button id='delete'> Delete Story </button>
                        <button id='edit'> Update Story </button>
                    </li>`
               })
           })
        }  

        function resetULs(){
            let showJavaUl = document.querySelector('#show-java ul')
            showJavaUl.innerHTML = ""

            let showJava = document.querySelector('#show-java')
            showJava.innerHTML = ""
        }

        function resetStory() {
            let javaFormDiv = document.getElementById('java-form')
            javaFormDiv.innerHTML = ""
        }

        function displayCreateStory() {
            const javaFormDiv = document.getElementById('java-form')
            let story = `
            <form>
                <label>Your Name:</label>
                <input type="text" id="person_name">
                <input type="submit" >
            </form>
            `
            javaFormDiv.innerHTML = story
            document.getElementById('java-form').addEventListener('submit', createPerson)
        }

        function displayJavaForm(){

        }

        function createPerson() {
            event.preventDefault()
            const person = {
                name: document.getElementById('person_name').value,
                // shopName: document.getElementById('shop-name').value,
                // favoriteDrink: document.getElementById('fav_drink').value,
                // leastFav: document.getElementById('least_fav').value,
                // recommend: document.getElementById('recommend').checked,
                // comments: document.getElementById('comment').value
            }
            fetch(baseUrl + '/people', {
                method: "POST", 
                body: JSON.stringify(person),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(person => {
                document.getElementById('main') += `
                <li>
                    <a href="#" data-id="${person.id}">${person.name}'s Java Script...</a>   
                </li>  
                `
                eventClick()   
            })
         function deleteStory() {
             this.id
         }   
        }
     
    