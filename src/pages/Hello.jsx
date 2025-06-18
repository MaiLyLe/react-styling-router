import { useRoute } from 'wouter';

export default function Hello() {
  const [match, params] = useRoute('/hello/:name');

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {match ? `Hello, ${params.name}!` : 'Hello!'}
      </h1>
      <p className="text-gray-600">Welcome!</p>
    </div>
  );
}
