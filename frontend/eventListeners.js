    function eventClick() {
        let people = document.querySelectorAll('li a')
            people.forEach(person => {
                person.addEventListener('click', displayStory)
                })             
            newButton.addEventListener('click', displayCreateStory)
            viewJava.addEventListener('click', loadPeople)
            
        }

        function editDelete() {
            addButton.addEventListener('submit', displayJavaForm)
            deleteButton.addEventListener('submit', deleteStory) //delete request /java_bars/id
            editButton.addEventListener('submit', editStory)
        }