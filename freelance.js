const spanCount = document.querySelector('#spanCount');
const spanAveragePrice = document.querySelector('#spanAveragePrice');
const ul = document.querySelector('ul');

const freelancers = [
  { name: 'Dr. Slice', price: 25, occupation: 'Gardener'},
  { name: 'Dr. Pressure', price: 51, occupation: 'Programmer'}
];

const names = ['Dr. Slice', 'Dr. Pressure', 'Mr. Jones', 'Mr. Rodgers', 'Sir Rudy'];
const occupations = ['Gardener', 'Programmer', 'Producer', 'Singer', 'Host'];

function render(){
  spanCount.innerHTML = freelancers.length;

  let sum = 0;
  freelancers.forEach((freelancer)=>  {
    sum = sum + freelancer.price;
  });
  const average = sum / freelancers.length;
  spanAveragePrice.innerHTML = average.toFixed(2);

  const html = freelancers.map((freelancer)=>  {
    return `
      <li>
        ${freelancer.name} is a ${freelancer.occupation} and costs $${freelancer.price.toFixed(2)} per hour.
      </li>
    `;
  }).join('');

  ul.innerHTML = html;
};

render();

const interval = setInterval(()=>  {
  const nameIndex = Math.floor(Math.random()*names.length);
  const name = names[nameIndex];
  const occupationIndex = Math.floor(Math.random()*occupations.length);
  const occupation = occupations[occupationIndex];
  const price = Math.ceil(Math.random()*100);
  const randomFreelancer = {
    name: name,
    occupation: occupation,
    price: price
  };
  freelancers.push(randomFreelancer);
  render();
  if(freelancers.length === 15){
    clearInterval(interval);
  }
}, 1000);