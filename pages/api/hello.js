// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const data = [
    {
      name: 'Masfikul Alam',
      dob: '2nd July 2003',
      city: 'Chittagong',
      country: 'Bangladesh',
      email: 'masfikalamfrp@gmail.com'
    },
    {
      name: 'Jhankar Mahbub',
      dob: '15th May 2003',
      city: 'Chicago',
      country: 'USA',
      email: 'jhankar.mahbub1@gmail.com'
    }
  ]
  res.status(200).json(data)
}
