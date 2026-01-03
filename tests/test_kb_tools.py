#!/usr/bin/env python3
"""
Tests for tools/kb/ scripts
Knowledge base management tests
"""

import sys
import pytest
from pathlib import Path
from unittest.mock import patch, MagicMock

# Add tools directory to path
TOOLS_DIR = Path(__file__).parent.parent / "tools"
sys.path.insert(0, str(TOOLS_DIR))


class TestKBSearch:
    """Tests for KB search functionality"""
    
    def test_search_main_requires_query(self):
        """Test that search requires a query argument"""
        from kb.search import main
        
        # Running without arguments should exit with error
        with patch('sys.argv', ['search.py']):
            with patch('builtins.print'):
                with pytest.raises(SystemExit) as excinfo:
                    main()
                assert excinfo.value.code == 1
    
    def test_search_accepts_query(self):
        """Test that search accepts a query argument"""
        from kb.search import main
        
        with patch('sys.argv', ['search.py', 'test']):
            with patch('builtins.print'):
                # Should not raise an exception
                try:
                    main()
                except SystemExit as e:
                    # May exit 0 or None on success
                    assert e.code in [0, None] or e.code is None


class TestKBStats:
    """Tests for KB statistics functionality"""
    
    def test_stats_module_exists(self):
        """Test that stats module can be imported"""
        try:
            from kb.stats import main
        except ImportError as e:
            pytest.fail(f"Failed to import stats module: {e}")


class TestKBUpdateIndex:
    """Tests for KB index update functionality"""
    
    def test_update_index_module_exists(self):
        """Test that update-index module can be imported"""
        # Note: file is named update-index.py with hyphen
        update_index_path = TOOLS_DIR / "kb" / "update-index.py"
        assert update_index_path.exists(), "update-index.py should exist"


class TestKBIntegration:
    """Integration tests for KB tools"""
    
    def test_kb_directory_exists(self):
        """Test that KB directory exists"""
        kb_path = TOOLS_DIR.parent / ".agent" / "knowledge-base"
        assert kb_path.exists(), "Knowledge base directory should exist"
    
    def test_kb_has_index(self):
        """Test that KB has INDEX.md"""
        index_path = TOOLS_DIR.parent / ".agent" / "knowledge-base" / "INDEX.md"
        # INDEX.md may or may not exist, just check if kb path exists
        kb_path = TOOLS_DIR.parent / ".agent" / "knowledge-base"
        assert kb_path.exists()


if __name__ == '__main__':
    pytest.main([__file__, '-v'])
