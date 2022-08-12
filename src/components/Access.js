import styles from '../styles/Access.module.css'
import { Box, Button, Input } from '@chakra-ui/react'
function Access() {
  return (

    <div className={styles.container}>
      <div className={styles.logo}>
        <span>We</span>
        <span>Talk</span>
      </div>
      <Box maxW='sm' borderRadius='lg'  padding='20px'>
        <Input variant='filled' placeholder='Name' />
        <Button colorScheme='teal' width='100%' marginTop='10px'> Start </Button>

      </Box>
    </div>
  )
}

export default Access