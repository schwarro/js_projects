      let person = {
        name: "Rob",
        eyeColor: "Blue",
        age: 30,
        updateAge: function() {
          return ++person.age
        }
      }

      function Person(name, eyeColor, age){
        this.name = name;
        this.eyeColor = eyeColor;
        this.age = age;
        this.updateAge = function() {
          return ++this.age
        };
      }

      let person01 = new Person("Rob", "Blue", 30);

      console.log(person01);
