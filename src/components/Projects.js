import React from 'react'
import '../assets/styles/Project-Sec.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const Projects = () => {
  return (
    <div className={'project-section'}>
      <div className='container row'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://colorlib.com/wp/wp-content/uploads/sites/2/accounting-website-design.jpg'
              />
              <Card.Body>
                <Card.Title>Accountant Online</Card.Title>
                <Card.Text>Award Winning Online Business Service.</Card.Text>
                <Button variant='dark'>Go Visit</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://prioritypixels.co.uk/wp-content/uploads/2022/02/50-Best-Web-Design-Aegncy-Websites-2022.jpg'
              />
              <Card.Body>
                <Card.Title>Digital Experience</Card.Title>
                <Card.Text>
                  Creating Digital Experience that Shoppers Love
                </Card.Text>
                <Button variant='dark'>Go Visit</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpTTf68hrikARg6w4cmI2tHI1nltznAl3aaWF_dh3tTjkSaU2Ws90qdNUosKU2R8mEh0&usqp=CAU'
              />
              <Card.Body>
                <Card.Title>PYXL</Card.Title>
                <Card.Text>
                  A Differennt Digital Agent Together We are PYXL This Services
                  is very Usefull for i dont know who.
                </Card.Text>
                <Button variant='dark'>Go Visit</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://www.dreamhost.com/static/c37146d4e408c7e7d4683ebdb8416df7/1a803/hero.png'
              />
              <Card.Body>
                <Card.Title>BreakPoint</Card.Title>
                <Card.Text>
                  We Service Night Clubs, and Many More......
                </Card.Text>
                <Button variant='dark'>Go Visit</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://designeverything.xyz/wp-content/uploads/2021/10/Website-Design-Home-Page.jpg'
              />
              <Card.Body>
                <Card.Title>i3 Systems</Card.Title>
                <Card.Text>
                  Automation for Insurance Collecting More Gold Data on Every
                  Process to Make it.
                </Card.Text>
                <Button variant='dark'>Go Visit</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 mt-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src='https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg'
              />
              <Card.Body>
                <Card.Title>Night Life</Card.Title>
                <Card.Text>
                  Wellcome to Party Join the Club, templete for modern websites.
                </Card.Text>
                <Button variant='dark'>Go Visit</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='d-flex justify-content-end mt-4 mb-4 align-content-end'>
            <button className={'btn btn-lg btn-dark'}>See all Projects</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
