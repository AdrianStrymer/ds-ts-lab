import {Friend, Colleague } from './myTypes'
import { friends } from './01-basics'
import { colleagues } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f:Friend[]) : string[] {
    const output : string[] = [];

    for (let i = 0; i < f.length; i++) {
        output.push(older(f[i]));
    }

    return output;
}

console.log(allOlder(friends))

function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: Colleague["name"], department: Colleague["department"], email:string): void {
    const highestEx = highestExtension(cs);
    const newExtension = highestEx.contact.extension + 1;

    const addedColleague = {
        name : name,
        department : department,
        contact : {
            email: email,
            extension: newExtension
        },

    };

    cs.push(addedColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));