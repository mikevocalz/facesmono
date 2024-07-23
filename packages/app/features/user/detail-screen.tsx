import { createParam } from 'solito'
import { TextLink } from 'solito/link'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'

import { useParams, useRouter, useSearchParams } from 'solito/navigation'

const useUserParams = useParams<{ id: string }>


export function UserDetailScreen() {

  

    const { id } = useUserParams()
    const router = useRouter()
    const searchParams = useSearchParams()

  return (
    <View className="flex-1 items-center bg-red-300">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>

      <Text className='mt-9' onPress={() => router.back()}>
       here is the search param: {searchParams?.get('search')}
      </Text>
    </View>
  )
}
