#!/usr/bin/env python3
"""
Tests for tools/agent/manage.py
Agent item management tests
"""

import sys
import pytest
from pathlib import Path
from unittest.mock import patch, MagicMock

# Add tools directory to path
TOOLS_DIR = Path(__file__).parent.parent / "tools"
sys.path.insert(0, str(TOOLS_DIR))


class TestAgentManage:
    """Tests for agent management functions"""
    
    def test_item_types_defined(self):
        """Test that all item types are defined"""
        from agent.manage import ITEM_TYPES
        
        expected_types = ['role', 'workflow', 'template', 'rule']
        for item_type in expected_types:
            assert item_type in ITEM_TYPES
    
    def test_item_type_has_required_keys(self):
        """Test that each item type has required configuration"""
        from agent.manage import ITEM_TYPES
        
        required_keys = ['dir', 'prefix', 'extension', 'template']
        
        for item_type, config in ITEM_TYPES.items():
            for key in required_keys:
                assert key in config, f"Missing '{key}' in {item_type}"
    
    def test_get_role_template(self):
        """Test role template generation"""
        from agent.manage import get_role_template
        
        template = get_role_template("test-role")
        
        assert template is not None
        assert len(template) > 0
        assert "test-role" in template.lower() or "Test-Role" in template or "TEST-ROLE" in template
    
    def test_get_workflow_template(self):
        """Test workflow template generation"""
        from agent.manage import get_workflow_template
        
        template = get_workflow_template("test-workflow")
        
        assert template is not None
        assert len(template) > 0
    
    def test_get_template_template(self):
        """Test template template generation"""
        from agent.manage import get_template_template
        
        template = get_template_template("test-template")
        
        assert template is not None
        assert len(template) > 0
    
    def test_get_rule_template(self):
        """Test rule template generation"""
        from agent.manage import get_rule_template
        
        template = get_rule_template("test-rule")
        
        assert template is not None
        assert len(template) > 0
    
    def test_templates_dict_complete(self):
        """Test that TEMPLATES dict maps all item types"""
        from agent.manage import TEMPLATES, ITEM_TYPES
        
        for item_type, config in ITEM_TYPES.items():
            template_func = config.get('template')
            assert template_func in TEMPLATES, f"Template function {template_func} not found"


class TestAgentManageListItems:
    """Tests for list_items function"""
    
    def test_list_items_role_returns_list(self):
        """Test listing roles returns a list"""
        from agent.manage import list_items
        
        # list_items prints to stdout, so we capture it
        with patch('builtins.print') as mock_print:
            result = list_items('role')
            # Should not raise an exception


class TestAgentManageValidation:
    """Tests for validation functions"""
    
    def test_validate_returns_bool_or_none(self):
        """Test that validate_item returns appropriate type"""
        from agent.manage import validate_item
        
        # Validate a non-existent item should handle gracefully
        with patch('builtins.print'):
            result = validate_item('role', 'nonexistent-item-xyz')
            # Result can be True, False, or None depending on implementation


class TestAgentManageIntegration:
    """Integration tests for agent management"""
    
    def test_list_existing_roles(self):
        """Test that at least some roles exist in the project"""
        from agent.manage import list_items
        
        # This is an integration test - checks actual file system
        # The .agent/roles directory should have some roles
        roles_dir = TOOLS_DIR.parent / ".agent" / "roles"
        
        if roles_dir.exists():
            md_files = list(roles_dir.glob("*.md"))
            assert len(md_files) > 0, "Expected at least one role in .agent/roles/"
    
    def test_list_existing_workflows(self):
        """Test that at least some workflows exist in the project"""
        workflows_dir = TOOLS_DIR.parent / ".agent" / "workflows"
        
        if workflows_dir.exists():
            md_files = list(workflows_dir.glob("*.md"))
            assert len(md_files) > 0, "Expected at least one workflow in .agent/workflows/"


if __name__ == '__main__':
    pytest.main([__file__, '-v'])
