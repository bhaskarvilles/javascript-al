const MyName = {
    firstname : "Bhaskar",
    middlename : "Ram",
    lastname : "Allam",
    fullname : function(){
        return this.firstname + ' ' + this.middlename + ' ' + this.lastname;
    }
}
console.log( ("Hello World, My name is") + ' ' + MyName.fullname());

const Myage = {
    DateofBirth : "05/08/1999",
    Year : "1999",
    Date : "05",
    Month : "August",
    Fulldob : function(){
        return this.Date + ' ' + this.Month + ' ' + this.Year;
    }
}
console.log( ("My Date of Birth is") + ' ' + Myage.Fulldob());

const MyFriendsAge = {
    DateofBirth : "01/01/1999",
    Year : "1999",
    Date : "01",
    Month : "January",
    FullFrienddob : function(){
        return this.Date + ' ' + this.Month + ' ' + this.Year;
    }
}
console.log( ("My friends Date of Birth is") + ' ' + MyFriendsAge.FullFrienddob());