// const student = {
//     fullName:"basant kushwaha",
//     marks:86,
//     printMarks:function(){
//         console.log("marks=", this.marks);
//     },
// };

// ==============ptototype=================================

const employee = {
    caltax(){
        console.log("tax rate is 10%");

    },
};

        const basant= {
        salary:15000,
        };

        const basant2= {
        salary:15000,
        };

        const basant3= {
        salary:15000,
        };

        const basant4= {
        salary:15000,
        };
basant.__proto__=employee;
basant2.__proto__=employee;
basant3.__proto__=employee;
basant4.__proto__=employee;
