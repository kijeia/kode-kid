import AppLayout from '@/components/AppLayout'
import Content from '@/components/Content'

const Home = () => (
  <AppLayout>
    <Content>
      <div className=' text-primary font-ropa'>
        Hello{' '}
        <span className='font-nunito-bold border-primary border-b-2'>Jane</span>
        !
      </div>
    </Content>
  </AppLayout>
)

export default Home
