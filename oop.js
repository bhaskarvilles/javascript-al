const MyName = {
    firstname : "Bhaskar",
    middlename : "Ram",
    lastname : "Allam",
    fullname : function(){
        return this.firstname + ' ' + this.middlename + ' ' + this.lastname;
    }
}
console.log(MyName.fullname());