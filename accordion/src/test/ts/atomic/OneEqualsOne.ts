import { UnitTest, Assert } from '@ephox/bedrock-client';

// This is an example of an atomic test, that is a test of some functionality separated from the editor.
UnitTest.test('atomic.OneEqualsOne', () => {
  Assert.eq('should be one', 1, 1);
});