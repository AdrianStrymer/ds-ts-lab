import {Friend, Colleague, EmailContact } from './myTypes'
import { friends } from './01-basics'
import { colleagues } from './01-basics'

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(f:Friend[]) {
    const output : string[] = [];

    for (let i = 0; i < f.length; i++) {
        output.push(older(f[i]));
    }

    return output;
}

console.log(allOlder(friends))

function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }

console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: Colleague["name"], department: Colleague["department"], email:string) {
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

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); 

function findFriends(friends : Friend[], c: (friend: Friend) => boolean) : string[] {
    return friends
        .filter(c)
        .map(friend => friend.name)
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));