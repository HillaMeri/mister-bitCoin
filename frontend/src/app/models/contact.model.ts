export class Contact {

    constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '') {
        
    }

    setId?() {
        // Implement your own set Id
        // this._id = makeId()
    }
}

// export interface Contact {
//     _id: string,
//     name: string,
//     email: string,
//     phone: string
//   }